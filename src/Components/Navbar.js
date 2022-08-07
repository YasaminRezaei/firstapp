import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
    display: flex;
    list-style: none;
    justify-content: right;
    background-color: #201e29;
    li {
        padding:20px 30px;
        cursor: pointer;
        color: #EDF5F5;
        font-weight: bold;
    }
    li:hover{
        color:white;
    }
    z-index:15;
    @media (max-width:768px){
        margin:0px;
        flex-direction:column;
        background-color:#48445b;
        position:fixed;
        transform:${props =>props.open?"translateX(0)":"translateX(100%)"};
        transition:all .3s linear;
        top:0px;
        right:0px;
        height:100vh;
        width:300px;
        padding-top:3.5rem;
    }
    li:hover{
        color:white;
    }
`

const Navbar = ({open}) => {
    
    return (
        <header>
                <UL open={open}>
                    <li>Products</li>
                    <li>Fragen</li>
                    <li>Über uns</li>
                    <li>Kontakt</li>
                    <li>Login</li>
                </UL>

        </header>
        
    );
};

export default Navbar;