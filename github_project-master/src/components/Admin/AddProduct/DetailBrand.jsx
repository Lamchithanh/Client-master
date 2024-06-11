import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { deleteBrand } from "../../../State/Product/Action";

const DetailBrand = ({ brands }) => {
  const dispatch = useDispatch();
  
  const handleDelete = (productId) => {
   
    dispatch(deleteBrand(productId));
  
  };
    return (
        <tr>
        <td>{brands.id}</td>
        <td  className="col-Image-Product">
          <img src={brands.imageUrl} alt="" />
        </td>

        <td>{brands.name}</td>
        <td style={{ width: "5%" }}>
                
                 
          <button onClick={() => handleDelete(brands.id)}class=" btn-outline-delete">
                    Delete
                  </button>
                </td>

        
      </tr>
    )
}
export default DetailBrand