import { randomProducts } from "../../fetcher";
import ProductGroup from "../productgroup/productgroup"
import StateGenerator from "../../stateGenerator";
import { useEffect } from "react";

const randomNumber = () =>{
    return Math.ceil(Math.random() * 6);
}

const Home = () => {
    const [newAdded, setNewAdded ] = StateGenerator([]);
    const [youMightLike, setYouMightLike] = StateGenerator([]);
    const [trending, setTrending] = StateGenerator([]);
    const [recommended, setRecommended] = StateGenerator([]);
    useEffect(()=>{

        randomProducts(randomNumber()).then((values)=>{
            setYouMightLike(values);
        })
        randomProducts(randomNumber()).then((values)=>{
            setTrending(values);
        })
        randomProducts(randomNumber()).then((values)=>{
            setNewAdded(values);
        })
        
        randomProducts(randomNumber()).then((values)=>{
            setRecommended(values);
        })
    }, [])

    return <>
            <ProductGroup groupTitle={"You might like"} items={youMightLike}/>
            <ProductGroup groupTitle={"Trending"} items={trending}/>
            <ProductGroup groupTitle={"Newly Added"} items={newAdded}/>
            <ProductGroup groupTitle={"Recommended"} items={recommended}/>
    </>
}

export default Home;