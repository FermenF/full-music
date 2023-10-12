import React from "react"
import Layout from '../Components/userLogged/Layout';

const Show = (props) => {
    const { artist } = props;
    console.log(artist);
    return(
        <Layout>
            <div>
                Nombre: {props.artist.name}

            </div>
        </Layout>
    );
}

export default Show;
