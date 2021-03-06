import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>My Posts</h1>

				<ul className={styles.posts}>
					<li className={styles.postsList}>
						<Post
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							date="12/12/12"
						/>
					</li>
					<li className={styles.postsList}>
						<Post
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							date="12/12/12"
						/>
					</li>
					<li className={styles.postsList}>
						<Post
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							date="12/12/12"
						/>
					</li>
				</ul>

				<form>
					<textarea className={styles.formTextarea}></textarea>
					<button className={styles.formButton}>Submit</button>
				</form>
			</main>
		</div>
	)
}
