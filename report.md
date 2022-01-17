# REPORT

## Gzip

### with compression
```
  size: 322B
```

### without compression
```
  size: 322B
```

## Artillery

### Result of profaling with node without `console.log`

```
[Summary]:
ticks  total  nonlib   name
  15    0.1%   93.8%  JavaScript
  0    0.0%    0.0%  C++
  19    0.2%  118.8%  GC
11473   99.9%          Shared libraries
  1    0.0%          Unaccounted

```

### Result of profaling with node with `console.log`

```
 [Summary]:
   ticks  total  nonlib   name
     16    0.1%  100.0%  JavaScript
      0    0.0%    0.0%  C++
     35    0.2%  218.8%  GC
  20834   99.9%          Shared libraries

```

## Autocannon

### without `console.log`

Running all benchmarks in parallel ...
Running 20s test @ http://localhost:8081/info
100 connections
```
┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 12 ms │ 16 ms │ 33 ms │ 40 ms │ 16.79 ms │ 5.75 ms │ 150 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 2327   │ 2327   │ 6095    │ 6639    │ 5784.9  │ 981.32 │ 2326   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 749 kB │ 749 kB │ 1.96 MB │ 2.14 MB │ 1.86 MB │ 316 kB │ 749 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘
```
Req/Bytes counts sampled once per second.

116k requests in 20.05s, 37.3 MB read

### with `console.log`

Running all benchmarks in parallel ...
Running 20s test @ http://localhost:8081/info
100 connections
```
┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 11 ms │ 17 ms │ 35 ms │ 45 ms │ 17.91 ms │ 6.61 ms │ 158 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Req/Sec   │ 1951   │ 1951   │ 5791    │ 6011    │ 5434.7  │ 1001.49 │ 1951   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Bytes/Sec │ 628 kB │ 628 kB │ 1.86 MB │ 1.94 MB │ 1.75 MB │ 323 kB  │ 628 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴─────────┴────────┘
```

Req/Bytes counts sampled once per second.

109k requests in 20.05s, 35 MB read

## Flame Graph

#### With `console.log`

![](/graphs/con_log.png)

#### Without `console.log`

![](/graphs/sin_log.png)

## Conclusion

`
  Agregar un console.log en el archivo no modifica considerablemente el rendimiento de la app.
`