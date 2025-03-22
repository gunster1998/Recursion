```markdown
# Алгоритмы на JavaScript

Этот репозиторий содержит реализации нескольких классических алгоритмов на языке JavaScript, включая:

1. **Числа Фибоначчи с использованием итерации**
2. **Числа Фибоначчи с использованием рекурсии**
3. **Алгоритм слияния с использованием рекурсии**

## Алгоритмы

### 1. Числа Фибоначчи с использованием итерации

Функция `fibs(fibsCount)` генерирует последовательность чисел Фибоначчи с заданным количеством элементов с помощью итеративного подхода.

```javascript
function fibs(fibsCount) {
    const arrayAcc = [];
    for (let i = 0; i < fibsCount; i++) {
        if (i < 2) {
            arrayAcc.push(i);
            continue;
        }
        arrayAcc.push(arrayAcc[i-1] + arrayAcc[i-2]);
    }
    return arrayAcc;
}
```

### 2. Числа Фибоначчи с использованием рекурсии

Функция `fibsRecursion(fibsCount, arrayAcc = [0, 1])` генерирует числа Фибоначчи с использованием рекурсии. При каждом шаге добавляется следующее число в последовательность.

```javascript
function fibsRecursion(fibsCount, arrayAcc = [0, 1]) {
    if (fibsCount === 0) {
        return [];
    } else if (fibsCount === 1) {
        return [0];
    }
    const newArray = arrayAcc.slice();
    if (newArray.length < fibsCount) {
        newArray.push(newArray[newArray.length-1] + newArray[newArray.length-2]);
        return fibsRecursion(fibsCount, newArray);
    }
    return newArray;
}
```

### 3. Алгоритм слияния (Merge Sort)

Реализация рекурсивного алгоритма сортировки слиянием с использованием вспомогательной функции `merge`.

```javascript
function merge(arrayLeft, arrayRight) {
    const cleanArray = [];
    while (arrayLeft.length && arrayRight.length) {
        if (arrayLeft[0] < arrayRight[0]) {
            cleanArray.push(arrayLeft.splice(0, 1)[0]);
        } else {
            cleanArray.push(arrayRight.splice(0, 1)[0]);
        }
    }
    return [...cleanArray, ...arrayLeft, ...arrayRight];
}

function slivRecursion(array) {
    if (array.length < 2) {
        return array;
    }

    const halfArray = Math.floor(array.length / 2);
    const leftArray = array.splice(0, halfArray);

    return merge(slivRecursion(leftArray), slivRecursion(array));
}
```

## Запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/yourusername/algorithms-js.git
   ```

2. Откройте файл `index.html` в браузере или создайте файл с расширением `.js` и подключите к своему проекту.

