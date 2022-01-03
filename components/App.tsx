import styles from '../styles/Home.module.css'
import {ApolloClient,InMemoryCache,gql} from '@apollo/client';
import useDateTime from "../components/useDateTime"
import {Container,Main,Title,Footer} from '../styles/styles';

export default function App({launches}) {
  const {displaytodayasdate,CurrentTime}=useDateTime()
  return (
    <div>
      <Container>
      <Main >
        <section >
          <Title>
            SpaceX Launches
          </Title>

          <p>
            Latest launches from SpaceX
          </p>
          </section>
          <div className={styles.grid}>
            {launches.map((launch) =>{
              return(
                <a key={launch.id} href={launch.links.video_link} className={styles.card} target='_blank' rel="noreferrer">
                  <h3>{launch.mission_name}</h3>
                  <p><strong>Launch Time:</strong>{new Date(launch.launch_date_local).toLocaleDateString("en-US")}</p>

                </a>
              )
            })}

          </div>
        </Main>

        <Footer>
          
            &copy; Oussama Horrigue  {displaytodayasdate} - {CurrentTime} 
          
        </Footer>
      </Container>
    </div>
  )
}
export async function getStaticProps(){
  const client=new ApolloClient({
    uri:'https://api.spacex.land/graphql/',
    cache:new InMemoryCache()
  })
  const {data}= await client.query({
    query:gql`
    query GetLaunches{
      launchesPast(limit:10){
        id
        mission_name
        launch_date_local
        launch_site{
          site_name_long
        }
        links{
          article_link
          video_link
          mission_patch
        }
        rocket{
          rocket_name
        }
      }
    }
    `
  })
  return{
    props:{
      launches:data.launchesPast
    }
  }
}
