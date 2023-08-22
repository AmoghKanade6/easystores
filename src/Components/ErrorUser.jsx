import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const ErrorUser = (props) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
            < div className="vh-100 mt-5" >
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol sm="2" md="9" lg="7" xl="6" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-grow-1 ms-3">
                                            <MDBCardTitle>{props.title}</MDBCardTitle>
                                            <MDBCardText>Please Login to continue</MDBCardText>
                                            <div className="d-flex pt-1">
                                                <button className='btn btn-primary mt-2  ms-2' onClick={() => loginWithRedirect()}>Log In</button>
                                            </div>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div >
        </>
    )
}

export default ErrorUser