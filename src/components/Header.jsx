import "./header.css";

function Header({ isVerified, session }) {
	return (
		<div className="header">
			<a href="/">
				<h1>The Connollys</h1>
			</a>
			{isVerified || session ? (
				<p>Welcome fam!</p>
			) : (
				<p>Enter the password to proceed</p>
			)}
		</div>
	);
}

export default Header;
