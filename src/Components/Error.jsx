import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Error = (props) => {
    return (
        <>
            < div className="vh-100 mt-5" >
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol md="4" lg="7" xl="6" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-grow-1 ms-3">
                                            <MDBCardTitle>{props.errorTitle}</MDBCardTitle>
                                            <MDBCardText>{props.errorDescription}</MDBCardText>
                                            <div className="d-flex pt-1">
                                                <NavLink to={props.errorLink}>
                                                    <button className=" btn btn-primary">Home</button>
                                                </NavLink>
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

export default Error