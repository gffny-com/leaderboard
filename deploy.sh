ENVIRONMENT=$1

echo 'DEV, QA, PROD' | grep -q ${ENVIRONMENT} 
if [ $? -eq 0 ] ; then
  echo ""
else
  echo "invalid environment parameter"
  usage
fi

environment=`echo "${ENVIRONMENT}" | tr '[:upper:]' '[:lower:]'`

echo "starting deployment to ${ENVIRONMENT} environment (${environment})"

lerna run deploy --stream -- ${environment} || exit $?