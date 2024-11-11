import { useContext } from 'react';
import { CarContext } from '../context/carContext';

function CarCard() {
    const { cars, loading } = useContext(CarContext);  // Akses cars dan loading dari context
    // console.log(cars)
    if (loading) {
        return <div className="loading-container"><div className="loading-spinner"></div></div>;
    }
    return (
        <section className="cars mb-5">
            <div className="contains">
                <div className="row" id="cars-container">
                    {cars.map((car) => (
                        <div className="col-lg-4" key={car.id}>
                            <div className="card px-4 py-4 mb-3">
                                <img src={car.image} className="card-img-top img-fluid" alt={car.model} />
                                <div className="card-body px-0 pt-3 pb-0">
                                    <h5 className="card-title fs-6">{car.manufacture}/{car.model}</h5>
                                    <h5 className="card-title fs-5 fw-bold">Rp {car.rentPerDay} / hari</h5>
                                    <p className="cars_p">{car.description}</p>
                                    <div className="row">
                                        <div className="col-1">
                                            <img src="/images/fi_users1.png" width="20px" alt="Users icon" />
                                        </div>
                                        <div className="col-10 ms-lg-2">
                                            {car.capacity} orang
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-1">
                                            <img src="/images/fi_settings.png" width="20px" alt="Settings icon" />
                                        </div>
                                        <div className="col-10 ms-lg-2">
                                            {car.transmission}
                                        </div>
                                    </div>
                                    <div className="row mt-2 mb-4">
                                        <div className="col-1">
                                            <img src="/images/fi_calendar.png" width="20px" alt="Calendar icon" />
                                        </div>
                                        <div className="col-10 ms-lg-2">
                                            Tahun {car.year}
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-success">Pilih Mobil</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarCard;
