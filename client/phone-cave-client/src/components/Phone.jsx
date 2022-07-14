import React from 'react';
import { Card, Text } from "@mantine/core";
import { Link } from 'react-router-dom';


function Phone({phone}) {
    return (
        <Card key={phone._id}
            shadow='sm'
            p='xl'
            component={Link}
            withBorder
            to={`/phones/${phone._id}`}
            sx={{
                '&:hover': {
                    backgroundColor: '#EEEEEE',
                },
                marginTop: 25,
                marginBottom: 10
            }}>
            <Text>{phone.name}</Text>
        </Card>
    );
}

export default Phone;