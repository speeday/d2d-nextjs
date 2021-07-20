import styles from './Post.module.scss'

const Post = ({ content, date }) => {
	return (
		<>
			<p className={styles.postMessage}>{content}</p>
			<p className={styles.postDate}>{date}</p>
		</>
	)
}

export default Post
