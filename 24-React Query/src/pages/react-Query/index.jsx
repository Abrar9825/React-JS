import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchListOfProducts } from "./api"
import { useState } from "react"
import { addNewProduct } from './api/index'

export default function Reactquery() {
    const [productsTitle, setproductsTitle] = useState('')
    
    const queryclient = useQueryClient()

    const { data: productList, isLoading } = useQuery({
        queryKey: ['productList'],
        queryFn: () => fetchListOfProducts()
    })

    const { mutateAsync: handlenewProductAdd } = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            queryclient.invalidateQueries(['productList'])
        }
    })
    if (isLoading) return <h1>Loading Products!!!</h1>

    async function handlenewAdd() {
        await handlenewProductAdd(productsTitle)
        setproductsTitle('')
    }

    return (
        <div>
            <h1>Recat Query</h1>
            <div>
                <input type="text" name="products" placeholder="Enter products Title" value={productsTitle} onChange={(event) => setproductsTitle(event.target.value)} /> <br />
                <button onClick={handlenewAdd} disabled={productsTitle.trim() === ''} type="button">Add New Products</button>
            </div>
            <ul>
                {productList?.length > 0 ?
                    productList.map((item) =>
                        <li key={item.id}>{item.title}</li>
                    )

                    : <h3>No Product Found</h3>

                }
            </ul>
        </div>
    )
}
