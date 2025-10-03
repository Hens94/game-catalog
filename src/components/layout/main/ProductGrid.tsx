import { Card } from "@/components/ui/card"

let numbers = [1,2,3,4,5,6,7,8,9,10]

const ProductGrid = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {numbers.map((num,index) => (
                <Card className="w-10 border-1" key={index}>
                    {index}
                </Card>
            ))}
            
        </div>
    )
}

export default ProductGrid