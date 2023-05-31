import React, { useState } from "react";
import "../CSS/Shop.css"



    let productsList = [
        {
            id: "0",
            name: "Backpack",
            price: "100,00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://img.eobuwie.cloud/eob_product_512w_512h(c/e/3/0/ce30f055edfe9c6b6f016821b56b0303829e8a69_01_7621701037817_swa.jpg,webp)/rucsac-guess-vezzola-smart-hmevzl-p3111-bla.webp",
            variants: ["blue", "red", "yellow"]
        },
        {
            id: "1",
            name: "Pencil",
            price: "1,00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://s13emagst.akamaized.net/products/36206/36205730/images/res_f1946b61d29d81748521b07109210f86.jpg?width=450&height=450&hash=034A07CBE5EA400CDFF60885E4AB0085",
            variants: ["big", "medium", "small"]
        },
        {
            id: "2",
            name: "Special Mug",
            price: "34,99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://gomagcdn.ro/domains/3gifts.ro/files/product/large/cana-termosensibila-personalizata-3-poze-si-text-copie-2447-1328.gif",
            variants: ["black", "white"]
        },
        {
            id: "3",
            name: "Cheapest Sneakers",
            price: "0,01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://img.eobuwie.cloud/eob_product_512w_512h(4/6/5/c/465c62f1b0e90bc86c5c3570f029e88294613c0e_0000200578156_01_mf_1.jpg,webp)/sneakers-puma-smash-v2-l-365215-01-puma-white-puma-white.webp",
            variants: ["orange", "black", "white", "brown"]
        },
        {
            id: "4",
            name: "Cheap Sneakers",
            price: "0,05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://img.eobuwie.cloud/eob_product_512w_512h(a/3/6/1/a361c527ba6253dba8933ae25c9dd2eb7bda30b0_01_0000301274483_mk.jpg,webp)/sneakers-big-star-shoesbig-star-shoes-kk274053-black.webp",
            variants: ["nice", "not so nice"]
        }, {
            id: "5",
            name: "Notebook",
            price: "1,00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://www.alexer.ro/img/43993/EVE07-93276-133/EVE07-93276-133.webp?time=1619721175",
            variants: ["green", "red", "yellow"]
        }, {
            id: "6",
            name: "Speakers",
            price: "49,99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://m.media-amazon.com/images/I/61pPPh4YEzL._AC_SL1500_.jpg",
            variants: ["10 W", "20 W", "30 W"]
        }, {
            id: "7",
            name: "Monitor",
            price: "654,24",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ro_RO?$jpglarge$&wid=1250",
            variants: ["19'", "20'", "21'"]
        }, {
            id: "8",
            name: "Laptop",
            price: "789,99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Lenovo_G500s_laptop-2903.jpg",
            variants: ["Intel", "AMD"]
        }, {
            id: "9",
            name: "Keyboard",
            price: "3,00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            imageURL: "https://api.citgrup.ro/storage/products/2022/06/Lenovo_SK-8825_cit_grup.webp",
            variants: ["Logitech", "Asus", "Philips"]
        }
    ];
    function Shop() {
        const [selectedCurrency, setSelectedCurrency] = useState("EUR")
    

    return (
        <div>
            <div className="currency-dropdown">Currency: &ensp;
                <select name="currency" id="currency" onChange={currency => setSelectedCurrency(currency.target.value)}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="ZAR">ZAR</option>
                    <option value="TRY">TRY</option>
                    <option value="SAR">SAR</option>
                    <option value="SGD">SGD</option>
                    <option value="SEK">SEK</option>
                    <option value="RON">RON</option>
                    <option value="PLN">PLN</option>
                    <option value="NZD">NZD</option>
                    <option value="NOK">NOK</option>
                    <option value="MXN">MXN</option>
                    <option value="JPY">JPY</option>
                    <option value="ILS">ILS</option>
                    <option value="HUF">HUF</option>
                    <option value="HKD">HKD</option>
                    <option value="DKK">DKK</option>
                    <option value="CZK">CZK</option>
                    <option value="CHF">CHF</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="QAR">QAR</option>
                    <option value="THB">THB</option>
                    <option value="AED">AED</option>
                </select> </div>
            <div className="products-container">
                {
                    productsList.map((product) => {
                        return <div className="product-div" key={product.id}>
                            <div className="product-image" >
                                <img src={product.imageURL} alt="product" />
                            </div>
                            <div className="product-details">
                                <h2>{product.name}</h2>
                                <h4>Price: {product.price}	&ensp; {selectedCurrency} </h4>
                                <p>{product.description}</p>
                                <div className="variants-and-add-to-cart-button">
                                    <div>
                                        {
                                            product.variants.map((variant) => {
                                                return <div>
                                                    <input type="radio" id="variant" name="variant" value="variant[0]"></input>
                                                    <label for="variant">{variant}</label>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="add-to-cart-button">Add to cart</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export {Shop, productsList}