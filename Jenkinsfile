pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t codurance/jenkins-pipeline-blog:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run codurance/jenkins-pipeline-blog:latest yarn test'
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'docker push codurance/jenkins-pipeline-blog:latest'
            }
        }
    }

    post {
        failure {
            echo 'build is broken. notify team!'
        }
    }
}
