import { useMemo } from 'react'
import { useCart } from '../Hooks/useCart'

function Header({cart, removeFromCart, addItem, removeItem, clearCart, isEmpty, carTotal }) {
    
    return (
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" id='logo' src="./img/logo.png" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {isEmpty ? (
                            <p className="text-center">El carrito esta vacio</p>
                            ) : (
                            <>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(nike => (
                                                <tr key={nike.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`/img/${nike.image}.png`} alt="imagen nike" />
                                                    </td>
                                                    <td>{nike.name}</td>
                                                    <td className="fw-bold">
                                                            $ {nike.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={()=>removeItem(nike.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {nike.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={()=>addItem(nike.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(nike.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                

                                <p className="text-end">Total pagar: <span className="fw-bold">$ {carTotal}</span></p>
                            
                        </>)}
                            <button onClick={()=>clearCart()} className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    )
}

export default Header;