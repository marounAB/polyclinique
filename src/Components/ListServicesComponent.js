import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ListServices extends React.Component {
    constructor(props) {
        super(props);
        const services=['Allergies', 'Cardiology', 'Dermatology', 'Endocrinology', 'Gynecology'];
        const s=services.map((speciality) => {
            return (
            <div class="col-6 col-md-3 speciality">
                <div>
                    {speciality}
                </div>
            </div>
            ); 
        });
        this.state = {
            specialities: s
        };
    }

    render() {
        return(
                <div class="row PolyInfo justify-content-center">
                    <div class="col-12">
                        <h3>Our Services and Specialities</h3>
                    </div>
                    {this.state.specialities}
                </div>
        );
    }
}

export default ListServices;