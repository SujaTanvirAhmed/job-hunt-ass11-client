import "./Order.css";
import OrderPic from "./meghalaya.jpg";

export const Order = () => {

    const handleOrderSubmit = () => { }

    return (
        <div className="order">
            <div className="container">
                <h1 className="page-title">Order</h1>
                <div className="main">
                    <div>
                        <form>
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Address" />
                            <input type="date" placeholder="Expected date of journey" />
                            <button onClick={handleOrderSubmit}>Order Now</button>
                        </form>
                    </div>
                    <div>
                        <img src={OrderPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}