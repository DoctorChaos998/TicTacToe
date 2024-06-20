import styled from 'styled-components';

const Wrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <Main>
            {children}
        </Main>
    )
}

export default Wrapper

const Main = styled.main({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: "Roboto, Arial, sans-serif"
})