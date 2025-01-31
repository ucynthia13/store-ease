import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="relative h-72">
          <Image
            src="/images/t-shirt.jpg"
            alt="login"
            fill
            className="cursor-pointer object-cover hover:brightness-50"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p>T-shirt</p>
        <p className="font-semibold text-sm">$50</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
