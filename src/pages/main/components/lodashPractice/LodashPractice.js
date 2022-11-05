import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import _ from 'lodash';

function LodashPractice() {

    const movies = [
        {
            title: 'Batman',
            img: 'https://picsum.photos/200',
            desc: 'This is a sample description'
        },
        {
            title: 'Superman',
            img: 'https://picsum.photos/200',
            desc: 'This is a sample description'
        },
        {
            title: 'Ironman',
            img: 'https://picsum.photos/200',
            desc: 'This is a sample description'
        },
        {
            title: 'Spiderman',
            img: 'https://picsum.photos/200',
            desc: 'This is a sample description'
        },
        {
            title: 'Batman 2',
            img: 'https://picsum.photos/200',
            desc: 'This is a sample description'
        },
    ];
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        arrDifference()
        probB()
        arrFlatten()
        probD()
    }, [])

    function handleChange(e){
        const input = e.target.value.trim()
        setSearchInput(input);

        let temp = _.map(movies, (m) => {
            if(m.title.includes(input)){
                return m.title
            } else {
                return;
            }
        })
    }

    function arrDifference() {

        const arrOne = [{
            id: 20,
            name: 'alex'
        }, {
            id: 30,
            name: 'alina'
        }];

        const arrTwo = [{
            id: 40,
            name: 'hello'
        }, {
            id: 30,
            name: 'world'
        }];

        console.log('************************************');
        console.log('Array Difference');
        console.log('Array 1: ', arrOne);
        console.log('Array 2: ', arrTwo);
        console.log('Results: ', _.zip(_.difference(arrOne, arrTwo), _.difference(arrTwo, arrOne)));
    }

    function probB() {

        const str = ['u', 'ec']

        const arr = [{
            storageVal: 'u',
            table: ['E', 'F']
        }, {
            storageVal: 'data',
            id: 3
        }, {
            storageVal: 'ec',
            table: ['E']
        }]

        let result = _.map(_.filter(arr, (o) => {
            return _.includes(str, o.storageVal);
        }), 'table');

        console.log('************************************');
        console.log('Lodash Problem B');
        console.log('Array 1: ', str);
        console.log('Array 2: ', arr);
        console.log('Results: ', result);
    }

    function arrFlatten() {

        const a = [['E'], ['F']]
        const t = [['E', 'F'], [['F'], ['G']]];

        console.log('************************************');
        console.log('Flatten Array');
        console.log('Array: ', a);
        console.log('Result: ', _.flatten(a))
    }

    function probD() {
        const t = [['E', 'F'], [['F'], ['G']]];
        let result = []
        _.forEach(_.map(t, (v) => {
            return _.flatten(v)
        }), (v) => {
            result = _.union(result, v);
        })

        console.log('************************************');
        console.log('Problem D');
        console.log('Array: ', t);
        console.log('Result: ', result)
    }

    return (
        <>
            <Typography
                variant="h3"
                component='div'
            >
                Lodash Practice on Console
            </Typography>
            <Autocomplete
                freeSolo
                disableClearable
                options={results.length ? results : movies.map((m) => m.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        onChange={handleChange}
                        label="Search Movies"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                sx={{
                    minWidth: 250,
                    maxWidth: 500,
                    width: '50%'
                }}
            />
        </>
    )
}

export default LodashPractice;