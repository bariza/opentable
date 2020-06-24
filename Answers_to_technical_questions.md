1. Around 5 hours. I would add route transitions, pagination or infinite scroll for longer restaurant lists, more filters, use memoization and perhaps lazy loading (overkill for this app), and add more unit tests.
2. Useful features added in javascript would be Object and Array destructuring eg in:
    [filter, setFilter] = useState('');
3. Styling and making the app look presentable were the most challenging parts.
4. I would try to do a profiling production build and look at the performance tab in devtools to see what and where is causing the performance hit. I have'nt needed to do this for React apps but definitely had to drill through SQL logs to looks for slow queries.
5. Would add a query param for ordering the results.
6. ```
    {
        "name": "Tarek Fattah",
        "role": "developer",
        "passion": "love learning exciting new things",
        "qualities": "friendly and respectful - love to laugh",
        "EXCITEMENT_LEVEL": 10,
        "is_that_it": true
    }
 ```