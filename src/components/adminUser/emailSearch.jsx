import React from "react";
import { Input, InputGroup, InputGroupText, Button, Container } from "reactstrap"
import Styled from "styled-components";

const Search = () => {
    return (
        <SContainer>
            <form 
            // onSubmit={handleSubmit} 
            >
                <InputGroup>
                    <InputGroupText>Enter email:</InputGroupText>
                    <Input type='text'
                    //  value={userEmail} onChange={handleEmail} 
                     placeholder="email" />
                </InputGroup>
                <Button color="success" 
                // onClick={() => handleSubmit()}
                >Search</Button>
            </form>
        </SContainer>
    )
}

const SContainer = Styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default Search