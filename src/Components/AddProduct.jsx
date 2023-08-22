import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, Prompt, useHistory } from 'react-router-dom/cjs/react-router-dom'
import styled from 'styled-components'

const Container = styled.div`margin-top:80px;`
const Title = styled.h3` margin:20px; font-weight:400;`
const Shop = styled.h3` margin:20px;`
const FilterContainer = styled.div`display :flex; justify-content:space-between;`

const AddProduct = () => {

    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [quantity, setQuantity] = useState('')
    const [viewCount, setViewCount] = useState(0)
    const [formFilled, setformFilled] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setformFilled(false)
        const formDataWithImage = new FormData()
        formDataWithImage.append('title', title)
        formDataWithImage.append('brand', brand)
        formDataWithImage.append('quantity', quantity)
        formDataWithImage.append('category', category)
        formDataWithImage.append('price', price)
        formDataWithImage.append('description', description)
        formDataWithImage.append('thumbnail', thumbnail)
        formDataWithImage.append('viewCount', setViewCount)
        const formData = { title, brand, quantity, category, price, description, thumbnail, viewCount }
        axios.post('http://localhost:4000/products', formData)
            .then((res) => {
                console.log(res);
                alert('Product Successfully added')
                history.push('/shop')
                setTitle('')
                setBrand('')
                setQuantity('')
                setCategory('')
                setPrice('')
                setDescription('')
                setThumbnail('')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleFormchange = () => {
        setformFilled(true)
    }

    return (
        <Container>
            <Prompt when={formFilled} message="Are you sure you want to leave this page" />
            <FilterContainer>
                <Shop className='pt-0'>Shop</Shop>
                <Title className='curd-title'>Add New Product</Title>
                <Title>
                    <NavLink to='/shop' className="btn btn-dark add p-2">Back</NavLink>
                </Title>
            </FilterContainer>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onChange={handleFormchange} onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Product Title
                                </label>
                                <input data-testid='product-title'
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    required

                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Manufacturer
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Manufacturer"
                                    value={brand}
                                    onChange={e => setBrand(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Product Quantity
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Product Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Category"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Product Price
                                </label>
                                <input data-testid='title-input'
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Price"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Product Description
                                </label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    id="exampleFormControlTextarea1"
                                    rows="2"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Product Image Link
                                </label>
                                <input data-testid='img-input'
                                    type="link"
                                    name="thumbnail"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Image link"
                                    value={thumbnail}
                                    onChange={e => setThumbnail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-12 mb-5">
                                <button className="btn-get-started" type="submit">
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AddProduct