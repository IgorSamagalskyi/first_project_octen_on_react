export default function UserPosts({item, getUserAllPosts}) {
    return (
        <div>
            - <button onClick={() => {
            getUserAllPosts(item.id)
        }}>click me</button>
        </div>
    );
}
//Як зробити, щоб при повторному натисканні на кнопку, контент згортався?