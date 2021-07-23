const Header = ({ handleSubmit, handleChange, search }) => {
    return (
        <header>
            <form onSubmit={ handleSubmit }>
                <input 
                    className="search" 
                    type="text" 
                    placeholder="Search..." 
                    value={ search }
                    onChange={ handleChange }
                />
            </form>
        </header>
    );
}

export default Header;