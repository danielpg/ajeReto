import boto3
import os

glue = boto3.client('glue')

def start(event, context):
    job_name = os.environ['GLUE_JOB_NAME']
    response = glue.start_job_run(JobName=job_name)
    return {
        "statusCode": 200,
        "body": f"Glue job started, run ID: {response['JobRunId']}"
    }
