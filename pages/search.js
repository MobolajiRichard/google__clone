import Head from "next/head"
import { useRouter } from "next/router"
import SearchHeader from "../components/SearchHeader"
import { API_KEY, CONTEXT_KEY } from "../Keys"
import Response from "../Response"
import SearchResults from "../components/SearchResults"
import Footer from "../components/Footer"

function Search({results}) {

  const router = useRouter()
console.log({router})
  return (
    <div>
        <Head>
            <title>Search Results - {router.query.term}</title>
        </Head>
        <div>
           <SearchHeader/>
           <SearchResults results={results}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
    const {term} = context.query
    const startIndex = context.query.start || 0

    const useDummyData = false
    const data = useDummyData? Response: await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`).then(response=>response.json());
return{
    props:{
results:data
}
}
}