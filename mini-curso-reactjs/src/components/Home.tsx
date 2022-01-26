import React from 'react';

interface HomeProps {
    title: string;
    subtitle?: string;

}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <header>{ props.title }</header>

    );
}

export default Home;