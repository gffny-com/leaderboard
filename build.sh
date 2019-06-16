lerna bootstrap || exit $?

lerna run build --stream || exit $?