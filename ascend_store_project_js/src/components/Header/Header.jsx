import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Person28Regular } from '@fluentui/react-icons'
import Button from '../Button'
import CartIcon from '../Carticon'

function Header() {
    return (
        <header className="flex justify-between items-center px-12 py-5 bg-blue-800 shadow-md">
            {/* Navbar */}
            <Navbar />

            {/* Logo */}
            <h3 className="text-2xl font-bold text-white">Ascend Store</h3>

            <div className="flex items-center gap-5">
                {/* Botão de Login/Registro */}
                <button
                    className="bg-amber-400 rounded px-4 py-2 text-slate-800 font-semibold text-sm cursor-pointer hover:bg-amber-500 transition duration-200"
                // onClick={() => setShowAuthModal(!showAuthModal)}
                >
                    <span className="mr-2">Entrar/Cadastre-se</span>
                    <Person28Regular />
                </button>

                {/* Ícone de Carrinho */}
                <div className="relative">
                    <CartIcon />
                    <span className="absolute top-[-5px] right-[-5px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-xs text-white">
                        2
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;