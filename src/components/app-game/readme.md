# app-game



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                    | Default |
| -------- | --------- | ----------- | ----------------------- | ------- |
| `size`   | `size`    |             | `10 or 100 or 20 or 50` | `10`    |


## Events

| Event    | Description | Type                                                |
| -------- | ----------- | --------------------------------------------------- |
| `change` |             | `CustomEvent<{ score: number; state: GameState; }>` |


## Dependencies

### Used by

 - [wc-snake-game]()
 - [wc-snake-game-worker](../app-game-worker)

### Depends on

- [wc-snake-game]()
- [app-pixel](../app-pixel)

### Graph
```mermaid
graph TD;
  wc-snake-game --> wc-snake-game
  wc-snake-game-worker --> wc-snake-game
  style wc-snake-game fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
