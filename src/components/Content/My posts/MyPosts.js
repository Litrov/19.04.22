import classes from './MyPosts.module.css';


function MyPosts({message}) {
    return (
        <div className={classes.MyPosts}>
            <div>{message}</div>
            <div>

            </div>
        </div>
    );
}


export default MyPosts;
