import Header from '../shared/Header';

const BaseLayout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default BaseLayout