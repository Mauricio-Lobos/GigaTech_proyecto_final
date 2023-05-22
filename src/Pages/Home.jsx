import Header from "../Components/Header";
import Form from 'react-bootstrap/Form';
import CardProduct from "../Components/Card";
import { useContext } from 'react';
import { Context } from '../Context/Provider';

export default function Home() {
    const { sortProducts, searchValue, setSearchValue } = useContext(Context);

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        sortProducts(sortValue);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };

    const datesValidation = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <main>
                <form className="search" action="" onSubmit={datesValidation}>
                    <Form.Select aria-label="Default select example" onChange={handleSortChange}>
                        <option>-- Ordenar por --</option>
                        <option value="price-lowest">Precio menor a mayor</option>
                        <option value="price-highest">Precio mayor a menor</option>
                    </Form.Select>
                    <Form.Control placeholder="Buscar" value={searchValue} onChange={handleSearchChange} />
                </form>
                <hr />
                <CardProduct />
            </main>
        </div>
    )
}