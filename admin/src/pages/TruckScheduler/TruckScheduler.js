import React, { useEffect,useState } from 'react'
import './TruckScheduler.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function TruckScheduler() {

    const navigate = useNavigate();
    const location = useLocation();
    const[deliveries, setDeliveries] = useState([]);
    const delivery_id = location.state || {};

    const fetchDeliveries = async () => {
        try {
            const response = await axios.get(`/manager/truckDelivery`,{ withCredentials: true });
            setDeliveries(response.data);
        } catch (error) {
            console.error('Error fetching deliveries', error);
        }
    };

    useEffect(() => {
        fetchDeliveries();
    }, []);

    const handleAssign = async () => {
        // Send request to backend to assign truck
        try {
            const response = await axios.post(`/manager/assignTruck`, { delivery_id },{ withCredentials: true });
            navigate('/delivery_schedule');
        } catch (error) {
            console.error('Error assigning truck:', error);
        }
    };

    const handleDelete = async (id) => {
        // Send request to backend to delete truck
        try {
            const response = await axios.delete(`/manager/deleteTruck`, { 
                data: { ID: id },
                withCredentials: true
            });
        } catch (error) {
            console.error('Error deleting truck:', error);
        }
    };

  return (
    <div>
        <div className='ADcontainer'>
            <div className='Acontainer'>
                <h1>Truck Scheduler</h1>
                <button className='btn btn-primary' onClick={() => handleAssign()}>Assign Truck, Driver & Assistant</button>
                <table className='order-table'>
                    <thead>
                    <tr>
                        <th>Delivery ID</th>
                        <th>Truck_ID</th>
                        <th>Driver_ID</th>
                        <th>Assistant_ID</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {deliveries.map((delivery, index) => (
                        <tr key={index}>
                            <td>{delivery.Truck_Del_ID}</td>
                            <td>{delivery.Truck_ID}</td>
                            <td>{delivery.Driver_ID}</td>
                            <td>{delivery.Assistant_ID}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => handleDelete(delivery.ID)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TruckScheduler;
