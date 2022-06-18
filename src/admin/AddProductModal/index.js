import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { TextField, Button } from '@mui/material';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Add Product</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="addProductModal" sx={style} >
            <div className='addProductModal__container'>
              <CancelPresentationOutlinedIcon onClick={handleClose} style={{ float: "right" }} />
              <h2>Add Product</h2>
              <div className='addProductModal__container__input'>
                <TextField id="outlined-basic1" label="Description" variant="outlined" name="description" type="text" sx={{ width: "300px" }} />
              </div>
              <div className='addProductModal__container__input'>
                <TextField id="outlined-basic2" variant="outlined" name="picture" type="file" sx={{ width: "300px" }} />
              </div>
              <div>
                <label>Select Size:</label>
                <div className='addProductModal__container__inputSize'>
                  <TextField id="outlined-basic3" label="Small" variant="outlined" name="size" type="text" sx={{ width: "70px" }} />
                  <TextField id="outlined-basic3" label="Medium" variant="outlined" name="size" type="text" sx={{ width: "70px" }} />
                  <TextField id="outlined-basic3" label="Large" variant="outlined" name="size" type="text" sx={{ width: "70px" }} />
                  <TextField id="outlined-basic3" label="X Large" variant="outlined" name="size" type="text" sx={{ width: "70px" }} />
                </div>
              </div>
              <div className='addProductModal__container__input'>
                <TextField id="outlined-basic7" label="Price" variant="outlined" name="price" type="text" sx={{ width: "300px" }} />
              </div>
              <div className='addProductModal__container__buttons'>
                <Button variant="contained" className='addProductModal__container__buttons__button-1'>Add to Store</Button> |
                <Button variant="contained" onClick={handleClose} className='addProductModal__container__buttons__button-2'>Cancel</Button>
              </div>
            </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
