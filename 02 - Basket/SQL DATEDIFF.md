| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _interval_     | Required. The part to return. Can be one of the following values:<br><br>- year, yyyy, yy = Year<br>- quarter, qq, q = Quarter<br>- month, mm, m = month<br>- dayofyear = Day of the year<br>- day, dy, y = Day<br>- week, ww, wk = Week<br>- weekday, dw, w = Weekday<br>- hour, hh = hour<br>- minute, mi, n = Minute<br>- second, ss, s = Second<br>- millisecond, ms = Millisecond |
| _date1, date2_ | Required. The two dates to calculate the difference between                                                                                                                                                                                                                                                                                                                            |
```sql
SELECT DATEDIFF(month, '2017/08/25', '2011/08/25') AS DateDiff;
```

```sql
SELECT DATEDIFF(hour, '2017/08/25 07:00', '2017/08/25 12:45') AS HoursDiff;
```
