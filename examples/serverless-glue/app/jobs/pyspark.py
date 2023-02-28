import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

params = ['JOB_NAME']

if "CUSTOM_ARGUMENT" in sys.argv.__str__():
    params.append("CUSTOM_ARGUMENT")

args = getResolvedOptions(sys.argv, ['JOB_NAME'])

sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

print(f"{args['JOB_NAME']} started")

if "CUSTOM_ARGUMENT" in args:
    print(f"{args['CUSTOM_ARGUMENT']}")

job.commit()
