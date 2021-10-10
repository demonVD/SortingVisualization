import React from 'react';
import Box from '@mui/material/Box';
class CustomBox extends React.Component {
    render() {
        return (
            <Box sx={{width: 'auto',height: 'auto', padding: '5px', border: 'ridge', bgcolor: 'primary.dark', '&:hover': {backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7], }, }}>
				<div>{this.props.number}</div>
			</Box>
        );
    }
}

export default CustomBox;