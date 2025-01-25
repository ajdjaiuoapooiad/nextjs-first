import { useRouter } from "next/router";

const Product = () => {
    const router = useRouter()
    console.log(router.query);
    const {id} = router.query
    


    return (
        <div>
            {id}
        </div>
    );
}

export default Product;