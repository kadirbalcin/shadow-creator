# What is this ?

Get perfect shadows every time for the non-designer.

# Installation

`npm i shadow-creator --save`

Then...

```
import { shadowcreator } from 'shadow-creator';

shadowcreator({
    shadow_type: 'soft',
    padding: false
});
```

## Options

Shadow Creator now supports 2 options, both of whic are optional:
* *shadow_type* - _hard / soft_ (Defaults to soft)
* *padding* - any px (Defaults to 0px)