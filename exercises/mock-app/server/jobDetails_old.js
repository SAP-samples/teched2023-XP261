const crypto = require('crypto');

module.exports = [
    {
        "jobID": "job-id-01",
        "startTime": "2021-08-10T10:00:00.000Z",
        "active": true,
        "jobIntervalInSeconds": 30,
        "maxThreadsAllowed": 2,
        "retryLastFailedOnSuccess": true,
        "numberOfRetriesBeforeFailing": 2,
        "retryIntervalInSeconds": 30,
        "supportsSubTasks": true,
        "ignoreJobsBeforeSeconds": 10,
        "jobDescription": "Job number 01",
        "jobDetails": {
            "scheduledTime": "2021-08-10T10:00:00.000Z",
            "subtaskNo": 1,
            "jobStatus": 1,
            "pickId": crypto.randomUUID(),
            "attemptsMapde": 2,
            "endTime": "2021-08-10T10:00:00.000Z",
            "statusText": "completed",
        }
    },
    {
        "jobID": "job-id-02",
        "startTime": "2021-08-11T11:00:00.000Z",
        "active": true,
        "jobIntervalInSeconds": 60,
        "maxThreadsAllowed": 4,
        "retryLastFailedOnSuccess": false,
        "numberOfRetriesBeforeFailing": 3,
        "retryIntervalInSeconds": 60,
        "supportsSubTasks": false,
        "ignoreJobsBeforeSeconds": 20,
        "jobDescription": "Job number 02",
        "jobDetails": {
            "scheduledTime": "2021-08-10T10:00:00.000Z",
            "subtaskNo": 2,
            "jobStatus": 1,
            "pickId": crypto.randomUUID(),
            "attemptsMapde": 2,
            "endTime": "2021-08-10T10:00:00.000Z",
            "statusText": "completed",
        }
    },
    {
        "jobID": "job-id-03",
        "startTime": "2021-08-12T12:00:00.000Z",
        "active": false,
        "jobIntervalInSeconds": 120,
        "maxThreadsAllowed": 6,
        "retryLastFailedOnSuccess": true,
        "numberOfRetriesBeforeFailing": 4,
        "retryIntervalInSeconds": 120,
        "supportsSubTasks": true,
        "ignoreJobsBeforeSeconds": 30,
        "jobDescription": "Job number 03",
        "jobDetails": {
            "scheduledTime": "2021-08-10T10:00:00.000Z",
            "subtaskNo": 3,
            "jobStatus": 0,
            "pickId": crypto.randomUUID(),
            "attemptsMapde": 2,
            "endTime": "2021-08-10T10:00:00.000Z",
            "statusText": "failed",
        }
    },
    {
        "jobID": "job-id-04",
        "startTime": "2021-08-23T13:00:00.000Z",
        "active": true,
        "jobIntervalInSeconds": 300,
        "maxThreadsAllowed": 8,
        "retryLastFailedOnSuccess": false,
        "numberOfRetriesBeforeFailing": 5,
        "retryIntervalInSeconds": 300,
        "supportsSubTasks": false,
        "ignoreJobsBeforeSeconds": 40,
        "jobDescription": "Job number 04",
        "jobDetails": {
            "scheduledTime": "2021-08-10T10:00:00.000Z",
            "subtaskNo": 4,
            "jobStatus": 1,
            "pickId": crypto.randomUUID(),
            "attemptsMapde": 2,
            "endTime": "2021-08-10T10:00:00.000Z",
            "statusText": "completed",
        }
    },
]
