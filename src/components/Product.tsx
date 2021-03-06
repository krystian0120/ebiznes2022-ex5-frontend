import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Product } from "../models/Product";
import { ShopContext } from "../context/ShopContext";

export interface ProductProps {
    product: Product
}

export function ProductComponent(props: ProductProps) {
    const { product } = props;
    const { addProduct } = useContext(ShopContext);

    return (
        <div>
            <Col xs sm="1" >

            </Col>

            <Col xs sm="7">
                <Card>
                    <h4>{product.name}</h4>
                </Card>
            </Col>

            <Col xs sm="3">
                <Button onClick={() => addProduct(product)}>Dodaj do koszyka</Button>
            </Col>
        </div>
    );
}