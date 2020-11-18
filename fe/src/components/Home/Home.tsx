import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Header from "../Header";
import Img from "../../assets/download.svg";

const booksResp: BooksresponseI[] = [
  { id: 1, name: "book one" },
  { id: 2, name: "book two" },
  { id: 3, name: "book three" },
];

interface BooksresponseI {
  id: number;
  name: string;
}

export const Home: React.FC = () => {
  const [booksList, setBooksList] = useState<BooksresponseI[]>([]);

  useEffect(() => {
    try {
      // make get request
      setBooksList(booksResp);
    } catch {
      console.log("some err");
    }
  }, []);

  const getCurrentBook = (bookParam: BooksresponseI) => {
    console.log(bookParam);
  };

  return (
    <div>
      <Header />

      {booksList.map((book) => {
        return (
          <Card key={book.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
              <Card.Title>{book.name}</Card.Title>
              <Card.Text>{book.id}</Card.Text>
              <Button onClick={() => getCurrentBook(book)} variant="primary">
                detail
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
