



const AddService = () => {
   
   
  const handleService = event =>{
    event.preventDefault();
    const form = event.target;
    
    const service = form.service.value;
    const photoURL = form.photoURL.value;
    const  charge =   form.charge.value;
    const  description = form.description.value;

  const services = {
  
    title:service,
    img:photoURL,
    charge:charge,
    description:description,
  }
  fetch('http://localhost:5000/services', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(services)
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('add service placed successfully')
            form.reset();
            
        }
    })
    .catch(er => console.error(er))
     
  }


    return (
        <div>
            <div>
             <form onSubmit={handleService} >
                    <h2 className="text-5xl text-center m-4 font-semibold"> Add service</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        
                       <input name="service" type="text" placeholder="Your Service" className="input input-ghost w-full  input-bordered" required />
                      <input name="photoURL" type="url" placeholder="Your PhotoURL"  className="input input-ghost w-full  input-bordered"  required />
                      <input name="charge" type="text" placeholder="Charge" className="input input-ghost w-full  input-bordered" required />
                </div>
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Your Description" required></textarea>
                    

                    <input className='btn btn-primary mb-4' type="submit" value="Add Service" />
                </form>
                </div>
            
        </div>
    );
};

export default AddService;