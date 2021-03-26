const measurementMap = [
    [
        {
            name: 'Sitting Eye Height',
            value: '41.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '22.5 in.'
        },
        {
            name: 'Seat Height',
            value: '14 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '42 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '23 in.'
        },
        {
            name: 'Seat Height',
            value: '14.5 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '43 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '23 in.'
        },
        {
            name: 'Seat Height',
            value: '15 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '44 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '23.5 in.'
        },
        {
            name: 'Seat Height',
            value: '15 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '44.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '24 in.'
        },
        {
            name: 'Seat Height',
            value: '15.5 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '45 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '24.5 in.'
        },
        {
            name: 'Seat Height',
            value: '15.5 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '46 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '25 in.'
        },
        {
            name: 'Seat Height',
            value: '16 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '46.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '25 in.'
        },
        {
            name: 'Seat Height',
            value: '16.5 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '47.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '25.5 in.'
        },
        {
            name: 'Seat Height',
            value: '16.5 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '48 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '26 in.'
        },
        {
            name: 'Seat Height',
            value: '17 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '48.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '26.5 in.'
        },
        {
            name: 'Seat Height',
            value: '17 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '49 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '27 in.'
        },
        {
            name: 'Seat Height',
            value: '17.5 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '50 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '27 in.'
        },
        {
            name: 'Seat Height',
            value: '18 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '50.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '27.5 in.'
        },
        {
            name: 'Seat Height',
            value: '18 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '51.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '28 in.'
        },
        {
            name: 'Seat Height',
            value: '19 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '52.5 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '28.5 in.'
        },
        {
            name: 'Seat Height',
            value: '19 in.'
        },
    ],
    [
        {
            name: 'Sitting Eye Height',
            value: '53 in.'
        },
        {
            name: 'Sitting Elbow Height',
            value: '28.5 in.'
        },
        {
            name: 'Seat Height',
            value: '19.5 in.'
        },
    ],
];

window.onload = () => {
    const heightSelector = document.getElementById('select-height');

    heightSelector.addEventListener('change', function() {
        const measurements = measurementMap[this.value || 0];
        const measurementList = document.getElementById('measurement-list');
        measurementList.innerHTML = "";

        measurements.map((item) => {
            const listItem = document.createElement('li');
            listItem.append(`${item.name}: `);
            listItem.append(item.value);
            measurementList.append(listItem);
        });
    
    }, false);

};
