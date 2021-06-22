
import './Post.css'
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Post({item} ) {

    return (
        (<div className={'post'}>
            {
                <div className={'post__box'}>
                    <p>post № {item.id}</p>
                    <h1>{item.body}</h1>
                    <h2>{item.title}</h2>
                    <p>id user № {item.userId}</p>
                </div>
            }
        </div>)
    );
}